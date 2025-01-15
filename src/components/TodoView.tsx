import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { addTodo, sortTodos } from "../store/todoSlice";
import { TextField, Button, List, Stack, Select, MenuItem, Typography, SelectChangeEvent } from "@mui/material";
import TodoItem from "./TodoItem";
import NewsOfTheDay from "./News";
import { useTheme } from "@mui/material/styles";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const TodoApp: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();
    const [text, setText] = useState<string>("");
    const [status, setStatus] = useState<"Todo" | "Doing" | "Done">("Todo");

    const theme = useTheme();

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    const handleChangeStatus = (event: SelectChangeEvent<"Todo" | "Doing" | "Done">) => {
        const newStatus = event.target.value as "Todo" | "Doing" | "Done";
        setStatus(newStatus);
    };

    useEffect(() => {
        dispatch(sortTodos(status));
    }, [status, dispatch]);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                height: '100vh',                 
                padding: '20px',
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary, 
 
            }}
        >
            <Typography variant="h5"style={{ marginBottom:15 }} >
                                    MY TODO APP
                                </Typography>
            <Stack direction="row" spacing={3} style={{ marginTop: "10px", marginBottom:15, width:580 }}>
                <TextField
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    label="New Todo"
                    fullWidth
                    inputProps={{
                        maxLength: 29,
                    }}
                    error={text.length >= 29}
                    helperText={text.length >= 29 ? "Max 29 caracters" : ""}
                    sx={{ backgroundColor: theme.palette.background.paper,  }}
                    
                />
                <Button onClick={handleAddTodo} 
                variant="contained" 
                style={{ width: "200px" }}
                sx={{ backgroundColor: theme.palette.action.active, color: theme.palette.text.primary , borderRadius: 10, height:45 }}
                >
                    Add Todo
                </Button>
            </Stack>

            {todos?.length>0 ? <Stack direction="row" spacing={25} justifyContent="space-evenly"  style={{ marginTop: "18px", paddingRight:10 , marginBottom:10}}>
            <Typography variant="h5"style={{ marginTop:3 }} >
                                    My tasks
                                </Typography>
                <div>
                <Typography variant="h7" style={{marginTop:15, marginRight:15}}>
                    Show first
                </Typography>
                <Select
                    value={status}
                    onChange={handleChangeStatus}
                    displayEmpty
                    style={{ marginRight: "10px", minWidth: "100px" }}
                    sx={{
                        background: theme.palette.background.paper, 
                        color: theme.palette.text.primary,
                        borderRadius:5,
                        height:40
                    }}
                    IconComponent={(props) => (
                        <ArrowDropDownIcon
                          {...props}
                          style={{ color: theme.palette.text.secondary }}
                        />
                      )}
                >
                    <MenuItem value="" disabled> Status </MenuItem>
                    <MenuItem value="Todo">Todo</MenuItem>
                    <MenuItem value="Doing">Doing</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                </Select>
                </div>
            </Stack>:''}
           
            <List>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </List>
          
            <div style={{
                position: 'fixed',
                bottom: 0,
               
            }}>
                <NewsOfTheDay />
            </div>
        </div>
    );
};

export default TodoApp;
