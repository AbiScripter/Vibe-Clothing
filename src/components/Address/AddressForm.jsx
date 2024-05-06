import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { addressAction } from "../../store/Address/addressActionTypes";
import { addAddress } from "../../slices/addressSlice";
const AddressForm = ({ setIsAddressFormModalOpen }) => {
  const [form] = Form.useForm(); //for form resetting

  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    // dispatch(addressAction(data, "add"));
    dispatch(addAddress(data));
    form.resetFields(); //reset the form
    setIsAddressFormModalOpen((isModalOpen) => !isModalOpen); //close the form modal after submitting
  };

  return (
    <Form
      form={form}
      variant="filled"
      style={{ maxWidth: 600 }}
      onFinish={handleFormSubmit}
      initialValues={{
        name: "abilash",
        mobile: "7788888322",
        pincode: "999999",
        address: "19 2nd croos road",
        city: "banglore",
        state: "karnataka",
        id: "5siyss01",
      }}
    >
      <h3>Contact Details</h3>
      <Form.Item
        label="Input"
        name="name"
        rules={[{ required: true, message: "Name*" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mobile No"
        name="mobile"
        rules={[{ required: true, message: "Mobile No*" }]}
      >
        <Input />
      </Form.Item>

      <h3>Address</h3>
      <Form.Item
        label="pincode"
        name="pincode"
        rules={[{ required: true, message: "Pincode*" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="address"
        name="address"
        rules={[{ required: true, message: "Address*" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="city/town"
        name="city"
        rules={[{ required: true, message: "City*" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="state"
        name="state"
        rules={[{ required: true, message: "State*" }]}
      >
        <Input />
      </Form.Item>

      <Button type="primary" block htmlType="submit">
        SUBMIT
      </Button>
    </Form>
  );
};

export default AddressForm;
