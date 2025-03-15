import Modal from "react-modal";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { getListCategory } from "../../services/categoryService";
import { editProduct } from "../../services/productsService";

function EditProduct(props) {
  const { item, onReload } = props;
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState(item);
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getListCategory();
      setDataCategory(result);
    };
    fetchApi();
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  function openModal() {
    console.log(item);
    setShowModel(true);
  }

  function closeModal() {
    setShowModel(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await editProduct(item.id, data);
    if (result) {
      setShowModel(false);
      onReload();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Edit Complete!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={showModel}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td>
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={data.title}
                  ></input>
                </td>
              </tr>
              {dataCategory.length > 0 && (
                <tr>
                  <td>Category</td>
                  <td>
                    <select
                      name="category"
                      onChange={handleChange}
                      value={data.category}
                    >
                      {dataCategory.map((item, index) => {
                        return (
                          <option value={item.slug} key={index}>
                            {item.slug}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                </tr>
              )}

              <tr>
                <td>Price</td>
                <td>
                  <input
                    type="text"
                    name="price"
                    onChange={handleChange}
                    value={data.price}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Discount Percent</td>
                <td>
                  <input
                    type="text"
                    name="discountPercentage"
                    onChange={handleChange}
                    value={data.discountPercentage}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Total number</td>
                <td>
                  <input
                    type="text"
                    name="stock"
                    onChange={handleChange}
                    value={data.stock}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Image Link</td>
                <td>
                  <input
                    type="text"
                    name="thumbnail"
                    onChange={handleChange}
                    value={data.thumbnail}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <textarea
                    rows={4}
                    name="description"
                    onChange={handleChange}
                    value={data.description}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={closeModal}>Cancel</button>
                </td>
                <td>
                  <input type="submit" value="Add"></input>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Modal>
    </>
  );
}

export default EditProduct;
