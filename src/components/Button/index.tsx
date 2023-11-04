import { styled } from "@mui/material/styles";
import MButton, { ButtonProps } from "@mui/material/Button";
import "/src/assets/fonts/Poppins/Poppins-Bold.ttf";

const CustomButton = styled(MButton)({
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: "16x",
  fontWeight: "bold",
  color: "rgba(20, 40, 50, 255)",
  backgroundColor: "rgb(100, 200, 30)",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "rgb(100, 200, 30)",
    transform: "scale(1.05)",
    transition: "transform 0.2s",
  },
}) as typeof MButton;

interface TButtonProps extends ButtonProps {}

const Button = (props: TButtonProps) => {
  return <CustomButton {...props}></CustomButton>;
};

export default Button;
