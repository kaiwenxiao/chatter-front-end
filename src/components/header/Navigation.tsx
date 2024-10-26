import { Box, Button } from "@mui/material";
import { Page } from "../../intefaces/page.interface.ts";
import router from "../Routes.tsx";

interface NavigationProps {
  pages: Page[];
}

const Navigation = ({ pages }: NavigationProps) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page.title}
          sx={{ my: 2, color: "white", display: "block" }}
          onClick={() => router.navigate(page.path)}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  );
};

export default Navigation;
