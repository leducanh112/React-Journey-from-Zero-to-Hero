import Modal from "react-modal";
import { useState, useEffect } from "react";

function CreateProduct(props) {
  const { onReload } = props;
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      fetch("http://localhost:3000/categories")
        .then((res) => res.json())
        .then((data) => {
          setDataCategory(data);
        });
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
    setShowModel(true);
  }

  function closeModal() {
    setShowModel(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setShowModel(false);
          onReload();
        }
      });
  };

  return (
    <>
      <button onClick={openModal}>Add</button>
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
                  ></input>
                </td>
              </tr>
              {dataCategory.length > 0 && (
                <tr>
                  <td>Category</td>
                  <td>
                    <select name="category" onChange={handleChange}>
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

export default CreateProduct;
