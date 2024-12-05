import { FilterList, FilterListItem, FilterLiveSearch } from "react-admin";
import { Card, CardContent } from "@mui/material";
import CategoryIcon from "@mui/icons-material/LocalOffer";

export const NFTFilterSidebar = () => (
  <Card sx={{ order: -1, mr: "24px", mt: "48px", width: 250 }}>
    <CardContent>
      <FilterLiveSearch />
      <FilterList label="Category" icon={<CategoryIcon />}>
        <FilterListItem label="Art" value={{ category_id: 1 }} />
        <FilterListItem label="Music" value={{ category_id: 2 }} />
        <FilterListItem label="Collectibles" value={{ category_id: 3 }} />
        <FilterListItem label="Gaming" value={{ category_id: 4 }} />
        <FilterListItem
          label="Virtual Real Estate"
          value={{ category_id: 5 }}
        />
      </FilterList>
    </CardContent>
  </Card>
);
