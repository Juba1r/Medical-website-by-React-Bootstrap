import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminPosts.css";

const AdminPosts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts] = useState([
    {
      id: 1,
      title: "Lorem ipsum",
      owner: "Doctor 1",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 2,
      title: "Lorem ipsum",
      owner: "Doctor 1",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 3,
      title: "Lorem ipsum",
      owner: "Doctor 2",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 4,
      title: "Lorem ipsum",
      owner: "Doctor 4",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      owner: "Doctor 6",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      owner: "Doctor 6",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      owner: "Doctor 6",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      owner: "Doctor 6",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      owner: "Doctor 6",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      owner: "Doctor 6",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      owner: "Doctor 6",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      owner: "Doctor 6",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      owner: "Doctor 6",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      owner: "Doctor 6",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      owner: "Doctor 6",
      category: "Lorem ipsum",
      description: "Lorem ipsum",
    },
    // More posts...
  ]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container post-main-container p-3">
      <div className="container bg-light mt-5 rounded-5  p-3">

        <h3 className="text-center mb-4 mt-3">All posts</h3>

        {/* Search Bar */}
        <div className="row justify-content-center mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control border-3 rounded-pill"
              placeholder="Search Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Posts Table */}
        <div className="table-responsive">
          <table className="table table-hover table-striped">
            <thead className="table-light">
              <tr>
                <th scope="col">
                  <input type="checkbox" />
                </th>
                <th scope="col">Title</th>
                <th scope="col">Owner</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col" className="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr key={post.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{post.title}</td>
                  <td>{post.owner}</td>
                  <td>{post.category}</td>
                  <td>{post.description}</td>
                  <td className="text-center">
                    <FaEdit className="text-primary me-2 action-icon" />
                    <FaTrash className="text-danger action-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPosts;
