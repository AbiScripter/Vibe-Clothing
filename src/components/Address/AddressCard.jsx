import { useDispatch } from "react-redux";
import { Button, Popover, Flex } from "antd";
import { addressAction } from "../../store/Address/addressActionTypes";
import { defaultAddress, deleteAddress } from "../../slices/addressSlice";

const AddressCard = ({
  address,
  isEditFormModalOpen,
  setIsEditFormModalOpen,
  setEditId,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAddress(address.id));
  };

  const handleEdit = () => {
    setIsEditFormModalOpen((isOpen) => !isOpen);
    setEditId(() => address.id);
  };

  const handleDelivery = () => {
    dispatch(defaultAddress(address.id));
  };

  return (
    <div className="address_card">
      <p>{address.name}</p>
      <p>
        {address.address},{address.city} {address.pincode}
      </p>
      <p>
        {address.city}, {address.state}{" "}
      </p>
      <p>Mobile: {address.mobile}</p>
      <Flex gap={5}>
        <Button
          size="small"
          onClick={handleDelivery}
          className={address.isDefault ? "default_delivery" : ""}
        >
          {address.isDefault ? "DELIVERING HERE" : "DELIVER HERE "}
        </Button>
        <Popover
          placement="right"
          content={address.isDefault ? "Can't Delete Default Address" : null}
        >
          <Button
            size="small"
            disabled={address.isDefault ? true : false}
            onClick={handleDelete}
            danger
          >
            DELETE
          </Button>
        </Popover>

        <Button size="small" onClick={handleEdit}>
          EDIT
        </Button>
      </Flex>
    </div>
  );
};

export default AddressCard;
