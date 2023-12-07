import Container from "react-bootstrap/Container";
import CustomBreadcrumb from "../../components/Breadcrumb";
import Text from "../../components/Text";
import EditCar from "../../components/Form/Cars/Edit";

const CarsEdit = () => {
  return (
    <Container className="adminBg" style={{ width: "100%" }}>
      <CustomBreadcrumb
        link={[
          { link: "/admin/cars", name: "Cars" },
          { link: "/admin/cars", name: "List Cars" },
          { link: "/admin/cars/edit/:id", name: "Edit Car", active: "active" },
        ]}
      />
      <Text variant={1} size="20px" weight="bold" height="30px">
        Edit Car
      </Text>
      <EditCar />
    </Container>
  );
};

export default CarsEdit;
