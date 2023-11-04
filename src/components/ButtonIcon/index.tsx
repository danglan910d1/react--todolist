import { styled } from "@mui/material/styles";
import MButtonIcon, { IconButtonProps } from "@mui/material/IconButton";
import "/src/assets/fonts/Poppins/Poppins-Bold.ttf";

const CustomButtonIcon = styled(MButtonIcon)({
  backgroundColor: "inherit",
  fontWeight: "bold",
}) as typeof MButtonIcon;

interface TButtonProps extends IconButtonProps {}

const ButtonIcon = (props: TButtonProps) => {
  return <CustomButtonIcon {...props}></CustomButtonIcon>;
};

export default ButtonIcon;
