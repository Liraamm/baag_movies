import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useSearchParams } from "react-router-dom";
import { DataObjectSharp } from "@mui/icons-material";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = React.useState(
    searchParams.get("category" || "all")
  );

  const handleChange = (_, value) => {
    value && setCategory(value);
  };

  React.useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    if (category === "all") {
      const { _limit, _page, q } = currentParams;

      setSearchParams({
        _page: 1,
      });
    } else {
      setSearchParams({
        ...currentParams,
        category,
        _page: 1,
      });
    }
  }, [category]);

  return (
    <ToggleButtonGroup
      sx={{ color: "#31112C", backgroundColor: "#FBDCC4" }}
      value={category}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="Movie">Movies</ToggleButton>
      <ToggleButton value="Show">Shows</ToggleButton>
    </ToggleButtonGroup>
  );
}
