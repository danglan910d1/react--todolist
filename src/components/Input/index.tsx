import { styled } from "@mui/material/styles";
import MInput, { InputBaseProps } from "@mui/material/InputBase";

const CustomInput = styled(MInput)({
  width: "100%",
  backgroundColor: "white",
  color: "rgba(110, 110, 110 ,255)",
  fontWeight: "bold",
  fontSize: "24px",
  paddingLeft: "24px",
  paddingRight: "24px",
  borderRadius: "30px",
  border: "1px solid rgba(110, 110, 110 ,255)",
}) as typeof MInput;

interface InputProps extends InputBaseProps {}

const Input = (props: InputProps) => {
  return <CustomInput {...props}></CustomInput>;
};
export default Input;
