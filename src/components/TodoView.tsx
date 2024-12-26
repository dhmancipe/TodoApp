import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { addTodo, sortTodos } from "../store/todoSlice";
import { TextField, Button, List, Stack, Select, MenuItem, Typography, SelectChangeEvent } from "@mui/material";
import TodoItem from "./TodoItem";
import NewsOfTheDay from "./News";

const TodoApp: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();
    const [text, setText] = useState<string>("");
    const [status, setStatus] = useState<"Todo" | "Doing" | "Done">("Todo");

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
            }}
        >
            <Typography variant="h4"style={{ marginBottom:15 }} >
                                    MY TODO APP
                                </Typography>
            <Stack direction="row" spacing={3} style={{ marginTop: "10px", marginBottom:15, width:580 }}>
                <TextField
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    label="New Todo"
                    fullWidth
                    inputProps={{
                        maxLength: 30,
                    }}
                    error={text.length >= 30}
                    helperText={text.length >= 30 ? "Max 30 caracters" : ""}
                />
                <Button onClick={handleAddTodo} variant="contained" style={{ width: "200px" }}>
                    Add Todo
                </Button>
            </Stack>
           
            <List>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </List>
           {todos?.length>0 ? <Stack direction="row" spacing={2} style={{ marginTop: "10px", paddingRight:10 }}>
                <Typography variant="h7" style={{marginTop:15}}>
                    Show first
                </Typography>
                <Select
                    value={status}
                    onChange={handleChangeStatus}
                    displayEmpty
                    style={{ marginRight: "10px", minWidth: "100px" }}
                    sx={{ background: 'white' }}
                >
                    <MenuItem value="" disabled> Status </MenuItem>
                    <MenuItem value="Todo">Todo</MenuItem>
                    <MenuItem value="Doing">Doing</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                </Select>
            </Stack>:''}
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
