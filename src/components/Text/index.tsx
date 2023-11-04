import { styled } from "@mui/material/styles";
import MTypo, { TypographyProps } from "@mui/material/Typography";
import "/src/assets/fonts/Poppins/Poppins-Regular.ttf";

const CustomTypo = styled(MTypo)({
  fontFamily: "Arial, Helvetica, sans-serif",
  width: "100%",
  height: "100%",
  padding: "15px",
  textOverflow: "unset",
  
}) as typeof MTypo;

interface TextProps extends TypographyProps {}

const Text = (props: TextProps) => {
  return <CustomTypo {...props}></CustomTypo>;
};

export default Text;
