const { QueryTypes } = require('sequelize')
const sequelize = require("../models")

const listProducts = async (req, res) => {
  try {
 
    // if (userRole != 1) {
    //   const showCategoryByUser = await sequelize.query(
    //     "select * from products where Id = ?",
    //     {
    //       type: QueryTypes.SELECT,
    //       replacements: [Id],
    //     }
    //   );
 
      // if (showCategoryByUser.length == 0) {
      //   return res.status(400).json({
      //     error: "NOTHING! to show, you don't have any category",
      //   });
      // }
 
      // res.status(200).json({ status: "success", showCategoryByUser });
    // } else {
      const showCategoryByAdmin = await sequelize.query(
        "select * from products",
        {
          type: QueryTypes.SELECT,
        }
      );
 
      if (showCategoryByAdmin.length == 0) {
        return res.status(400).json({
          error: "NOTHING! to show, there's no products exist",
        });
      }
 
      res.status(200).json({ status: "success", showCategoryByAdmin });
    // }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createProduct = async (req, res) => {
  const { name, description, categoryId, price } = req.body;
  const { userRole, id } = req.obj;

  const productImages = [];

  req.files.forEach((file) => {
    productImages.push(file.originalname);
  });

  if (!name) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  if (!description || description.trim() === "") {
    return res.status(400).json({
      message: "Description is required",
    });
  }

  if (!categoryId || categoryId.trim() === "") {
    return res.status(400).json({
      message: "Category ID is required",
    });
  }

  if (!price || isNaN(price) || price <= 0) {
    return res.status(400).json({
      message: "Price must be a positive number",
    });
  }

  if (
    !productImages ||
    !Array.isArray(productImages) ||
    productImages.length === 0
  ) {
    return res.status(400).json({
      message: "At least one image is required",
    });
  }

  try {
    const nameExist = await sequelize.query(
      "select * from products where name = ?",
      {
        type: QueryTypes.SELECT,
        replacements: [name],
      }
    );

    if (nameExist.length != 0) {
      return res.status(409).json({ error: "Name already in use" });
    }

    const checkCategory = await sequelize.query(
      "select * from categories where id = ?",
      {
        type: QueryTypes.SELECT,
        replacements: [categoryId],
      }
    );

    if (checkCategory == 0) {
      return res.status(400).json({ error: "Category does not exist." });
    }

    if (userRole != 1) {
      const checkCategoryByUser = await sequelize.query(
        `select id from categories where id = ? and createdBy = ?`,
        {
          type: QueryTypes.SELECT,
          replacements: [categoryId, id],
        }
      );

      if (checkCategoryByUser == 0) {
        return res
          .status(404)
          .json({ error: "Category is not created by you" });
      }
    }

    const insertProduct = await sequelize.query(
      "INSERT INTO `products` (`name`, `description`, `categoryId`, `price`, `images`) VALUES (?, ?, ?, ?, ?);",
      {
        type: QueryTypes.INSERT,
        replacements: [
          name,
          description,
          categoryId,
          price,
          JSON.stringify(productImages),
        ],
      }
    );
    //Insert into productimages table
    // const insertProductImages = await sequelize.query(
    //   "INSERT INTO `productphotos` (productId, photo_name) VALUES (?, ?);",
    //   {
    //     type: QueryTypes.INSERT,
    //     replacements: [insertProduct[0], JSON.stringify(productImages)],
    //   }
    // );

    res.status(200).json({ status: "success" });

   } catch (err) {
    return res
      .status(500)
      .json({ error: "Internal server error", msg: err.message });
  }
  };

  const updateProducts = async (req, res) => {
    try {
      const productId = req.params.id;
      const { name, description, categoryId, price } = req.body;
      const { userRole, id, firstname } = req.obj;
  
      const productImages = [];
      req.files.forEach((file) => {
        productImages.push(file.originalname);
      });
  
      const [checkProduct] = await sequelize.query(
        "select * from products where id = ?",
        {
          type: QueryTypes.SELECT,
          replacements: [productId],
        }
      );
  
      if (checkProduct == undefined) {
        return res.status(404).json({ error: "Product not found" });
      }
  
      const [categoryDetail] = await sequelize.query(
        "select * from categories where id = ?",
        {
          type: QueryTypes.SELECT,
          replacements: [categoryId],
        }
      );
      if (categoryDetail == undefined) {
        return res.status(404).json({ error: "No category found....!" });
      }
  
      if (userRole != 1) {
        if (id != categoryDetail.createdBy) {
          return res.status(400).json({
            error: `Category does not belong's to you Mr.${firstname} you cannot update the product`,
          });
        }
      }
  
      const updateProduct = await sequelize.query(
        `UPDATE products SET name = ?, description = ?, categoryId = ?, price = ?, images = ? WHERE products.id = ?`,
        {
          type: QueryTypes.UPDATE,
          replacements: [
            name || checkProduct.name,
            description || checkProduct.description,
            categoryId || checkProduct.categoryId,
            price || checkProduct.price,
            JSON.stringify(productImages) || checkProduct.images,
            productId,
          ],
        }
      );
  
      if (!updateProduct) {
        return res
          .status(400)
          .json({ error: "Error while updating the product" });
      }
  
      res.status(200).json({ status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  const deleteProducts = async (req, res) => {
    try {
      const productId = req.params.id;
      const { userRole, id, firstname } = req.obj;
  
      const [checkProduct] = await sequelize.query(
        "select * from products where id = ?",
        {
          type: QueryTypes.SELECT,
          replacements: [productId],
        }
      );
      if (checkProduct == undefined) {
        return res.status(404).json({ error: "Product not found to delete" });
      }
  
      const [categoryDetail] = await sequelize.query(
        "select * from categories where id = ?",
        {
          type: QueryTypes.SELECT,
          replacements: [checkProduct.categoryId],
        }
      );
      if (categoryDetail == undefined) {
        return res.status(404).json({ error: "No category found....!" });
      }
  
      if (userRole != 1) {
        if (id != categoryDetail.createdBy) {
          return res.status(400).json({
            error: `Category does not belong's to you Mr.${firstname} you cannot delete the product`,
          });
        }
      }
  
      const deleteProduct = sequelize.query(
        "DELETE FROM `products` WHERE `products`.`id` = ?",
        {
          type: QueryTypes.DELETE,
          replacements: [productId],
        }
      );
  
      if (!deleteProduct) {
        return res.status(400).json({
          error: `Error while deleting the product id : '${productId}'`,
        });
      }
  
      res.status(200).json({
        status: "success",
        msg: `Deleted product id '${productId}' successfully`,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Internal server error", msg: err.messsage });
    }
  };


  module.exports = {listProducts,createProduct,updateProducts,deleteProducts};