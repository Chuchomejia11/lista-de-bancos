import { Grid, GridItem, ThemeProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode; // Definir el tipo correcto para children
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem  colSpan={12} justifyContent="center">{children}</GridItem>
      </Grid>
  );
};
