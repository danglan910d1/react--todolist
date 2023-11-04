import { styled } from "@mui/material/styles";
import MBox, { BoxProps } from "@mui/material/Box";

const CustomBox = styled(MBox)({
  justifyContent: "center",
  alignItems: "center",
  marginY: "25px",
}) as typeof MBox;

interface TBoxProps extends BoxProps {}

const Box = (props: TBoxProps) => {
  return <CustomBox {...props}></CustomBox>;
};

export default Box;
