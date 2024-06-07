import React, { useState } from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../../context/productsApi";
import { toast } from "react-toastify";
import EditProductOverlay from "../../components/editProductOverlay/EditProductOverlay";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Loading from "../../components/loading/Loading";
import { CiEdit } from "react-icons/ci";

const ManageProducts = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [editProductId, setEditProductId] = useState(null);
  const [deletingProductId, setDeletingProductId] = useState(null);

  const handleEditProduct = (product) => {
    setEditProductId(product.id);
  };

  const handleSaveChanges = (editedProduct) => {
    setEditProductId(null);
    // Optionally save changes here if needed
  };

  const handleCancelEdit = () => {
    setEditProductId(null);
  };

  const handleDeleteProduct = async (productId) => {
    setDeletingProductId(productId);
    try {
      await deleteProduct(productId).unwrap();
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Failed to delete product");
    } finally {
      setDeletingProductId(null);
    }
  };

  return (
    <div className="manage__products">
      <h3>Manage Products</h3>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading products...</p>}
      {products &&
        products.map((product) => (
          <div key={product.id} className="product__managed">
            <div className="productsss">
              <div className="product__card">
                <Swiper
                  scrollbar={{
                    hide: true,
                  }}
                  modules={[Scrollbar]}
                  className="product__image"
                >
                  {product?.image ? (
                    product.image.map((imgSrc, index) => (
                      <SwiperSlide key={index}>
                        <button
                          className="edit__card"
                          onClick={() => handleEditProduct(product)}
                        >
                          <CiEdit />
                        </button>
                        <img
                          src={imgSrc}
                          alt={`${product.title} image ${index + 1}`}
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <Loading />
                  )}
                </Swiper>
                <div className="card__body">
                  <h2>{product.title}</h2>
                  <div className="prices">
                    <s>
                      ${(product.price * 2 - product.price * 1.5).toFixed(2)}
                    </s>
                    <b>${product.price}</b>
                  </div>
                  <div className="product__details">
                    <button onClick={() => handleEditProduct(product)}>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      disabled={deletingProductId === product.id}
                    >
                      {deletingProductId === product.id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {editProductId === product.id && (
              <EditProductOverlay
                product={product}
                onSave={handleSaveChanges}
                onClose={handleCancelEdit}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default ManageProducts;
