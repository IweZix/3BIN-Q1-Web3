import { useState } from "react";
import { Input, Button, Form, InputNumber } from "antd";

const AddMovieForm = ({ onMovieAdded }) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onMovieAdded({ title, director, duration, imageUrl, description, budget });
    setTitle("");
    setDirector("");
    setDuration(0);
    setImageUrl("");
    setDescription("");
    setBudget(0);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Form
        name="basic"
        style={{
          maxWidth: 600,
          width: "100%",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={() => console.log("Failed")}
        autoComplete="off"
      >
        <Form.Item label="Title">
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Director">
          <Input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Duration">
          <InputNumber
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Image URL">
          <Input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Budget">
          <InputNumber
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add Movie
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddMovieForm;