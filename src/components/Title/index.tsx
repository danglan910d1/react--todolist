import { styled } from "@mui/material/styles";
import MTypo, { TypographyProps } from "@mui/material/Typography";
import "/src/assets/fonts/Poppins/Poppins-Regular.ttf";

const CustomTypo = styled(MTypo)({
  fontFamily: "Arial, Helvetica, sans-serif",
  textAlign: "center",
  color: "black",
}) as typeof MTypo;

interface TitleProps extends TypographyProps {}

const Title = (props: TitleProps) => {
  return <CustomTypo {...props}></CustomTypo>;
};

export default Title;
