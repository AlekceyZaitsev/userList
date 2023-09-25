import { FC, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/context";
import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Switch,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { colorStyleThemeApp, colorStyleText } from "../styles/ThemeApp/style";
import { usersType } from "../interfaces/interface";
import { useDebounce } from "../utilites/useDebounce";
import { tableTitle } from "../tableSettings/settings";
import { createNewUser } from "../users/CreateNewUser";
import { stylesContainer } from "../styles/Container/style";
import { toggle } from "../utilites/functionCheck";
import { styleTextField } from "../styles/TextField/style";
import { styleBox } from "../styles/Box/style";
import { styleFormControl } from "../styles/FormControl/style";
import { styleTableRow, styleTableWidth } from "../styles/Table/styleTable";
import { styleTypography } from "../styles/Typography/style";
import { ChoiceUser } from "../users/ChoiceUser";
import { DeleteUser } from "../users/DeleteUser";
import validateErrorsForButton from "../utilites/Validate/ValidationButton";
import { validateInputLabel } from "../utilites/Validate/ValidateInputLabel";

const UserList: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [storageUser, setStorageUser] = useState<usersType[]>(
    JSON.parse(localStorage.getItem("list") || "false") || []
  );
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [choiceUser, setChoiceUser] = useState<boolean>(false);
  const [subscribed, setSubscribed] = useState<string>("Subscribed");
  const [isEmployed, setIsEmployed] = useState<string>("Unemployed");

  const debouncedName = useDebounce(name, 300);
  const debouncedAge = useDebounce(age, 300);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(storageUser));
  }, [storageUser]);

  return (
    <Container maxWidth="xl" sx={stylesContainer(theme)}>
      <Box sx={styleBox}>
        <TextField
          label={validateInputLabel(debouncedName, 10, "Name")}
          variant="outlined"
          color="success"
          onChange={(e) => setName(e.target.value)}
          sx={styleTextField(theme)}
        />
        <TextField
          label={validateInputLabel(debouncedAge, 3, "Age")}
          variant="outlined"
          color="success"
          onChange={(e) => setAge(e.target.value)}
          sx={styleTextField(theme)}
        />
        <FormControl fullWidth color="success" sx={styleFormControl(theme)}>
          <Select
            value={subscribed}
            onChange={(e) => setSubscribed(e.target.value as string)}
            sx={{ color: colorStyleText(theme) }}
          >
            <MenuItem value={"Subscribed"}>Subscribed</MenuItem>
            <MenuItem value={"Not Subscribed"}>Not Subscribed</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onClick={() =>
                  toggle(setIsEmployed, isEmployed, "Unemployed", "Employed")
                }
                color="success"
              />
            }
            sx={{ color: colorStyleText(theme) }}
            label="Employed"
          />
        </FormGroup>
        <Button
          variant="outlined"
          color="success"
          onClick={() =>
            createNewUser(
              storageUser,
              setStorageUser,
              debouncedName,
              debouncedAge,
              choiceUser,
              subscribed,
              isEmployed
            )
          }
          disabled={validateErrorsForButton(debouncedName, debouncedAge, 10, 3)}
        >
          Insert
        </Button>
        <FormGroup>
          <FormControlLabel
            control={<Switch color="success" onClick={toggleTheme} />}
            sx={{ color: colorStyleText(theme) }}
            label="Mode"
          />
        </FormGroup>
        <Button
          onClick={() => DeleteUser(storageUser, setStorageUser)}
          variant="outlined"
          color="success"
        >
          Delete
        </Button>
        {!storageUser.length && (
          <Typography sx={styleTypography(theme)}>
            Добавьте в таблицу нового пользователя
          </Typography>
        )}
      </Box>
      <TableContainer
        component={Paper}
        sx={{ background: colorStyleThemeApp(theme) }}
      >
        <Table sx={styleTableWidth} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableTitle.map((item) => (
                <TableCell
                  sx={{ color: colorStyleText(theme) }}
                  align="left"
                  key={item.length}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {storageUser.map((item: usersType) => (
              <TableRow
                sx={styleTableRow(theme, item.choices)}
                onClick={() => ChoiceUser(item.id, storageUser, setStorageUser)}
                key={item.id}
              >
                <TableCell align="left" sx={{ color: colorStyleText(theme) }}>
                  {item.name}
                </TableCell>
                <TableCell align="left" sx={{ color: colorStyleText(theme) }}>
                  {item.age}
                </TableCell>
                <TableCell align="left" sx={{ color: colorStyleText(theme) }}>
                  {item.subscription}
                </TableCell>
                <TableCell align="left" sx={{ color: colorStyleText(theme) }}>
                  {item.employment}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserList;
