import React, { useEffect, useState } from 'react';
import { ref, set, update, remove, onValue } from 'firebase/database';
import { database, auth } from '../firebase/firebase';
import { signOut } from 'firebase/auth';
import {
  Container,
  Typography,
  Paper,
  Box,
  TextField,
  IconButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  Toolbar,
  AppBar,
  Tabs,
  Tab,
  CircularProgress,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';
import axios from 'axios';

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItemId, setCurrentItemId] = useState('');
  const [newItem, setNewItem] = useState({ name: '', category: '', quantity: '' });
  const [tabIndex, setTabIndex] = useState(0);
  const [recipeSuggestions, setRecipeSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const itemsRef = ref(database, 'items');
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      const itemsArray = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setItems(itemsArray);
    });
  }, []);

  const handleAddItem = () => {
    if (newItem.name && newItem.category && newItem.quantity) {
      const newItemRef = ref(database, `items/${Date.now()}`);
      set(newItemRef, newItem)
        .then(() => {
          setNewItem({ name: '', category: '', quantity: '' });
          setOpen(false);
        })
        .catch((error) => console.error('Error adding item: ', error));
    }
  };

  const handleEditItem = () => {
    if (newItem.name && newItem.category && newItem.quantity) {
      const itemRef = ref(database, `items/${currentItemId}`);
      update(itemRef, newItem)
        .then(() => {
          setNewItem({ name: '', category: '', quantity: '' });
          setOpen(false);
          setEditMode(false);
        })
        .catch((error) => console.error('Error updating item: ', error));
    }
  };

  const handleOpenEditModal = (item) => {
    setNewItem({ name: item.name, category: item.category, quantity: item.quantity });
    setCurrentItemId(item.id);
    setEditMode(true);
    setOpen(true);
  };

  const handleDeleteItem = (id) => {
    remove(ref(database, `items/${id}`))
      .then(() => console.log('Item deleted'))
      .catch((error) => console.error('Error deleting item: ', error));
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRecipeRecommendation = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/recommend-recipes', { items });
      setRecipeSuggestions(response.data.recipes);
    } catch (error) {
      console.error('Error fetching recipe suggestions: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Pantry Tracker
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box my={4}>
        <Paper style={{ padding: '16px' }}>
          <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)} variant="fullWidth">
            <Tab label="Pantry Items" />
            <Tab label="Recipe Suggestions" />
          </Tabs>
          <Box mt={2}>
            {tabIndex === 0 && (
              <>
                <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
                  <TextField
                    label="Search"
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search items"
                    fullWidth
                  />
                  <IconButton color="primary" onClick={() => setOpen(true)}>
                    <AddIcon />
                  </IconButton>
                </Box>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredItems.map(item => (
                        <TableRow key={item.id}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.category}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>
                            <IconButton color="primary" onClick={() => handleOpenEditModal(item)}>
                              <EditIcon />
                            </IconButton>
                            <IconButton color="secondary" onClick={() => handleDeleteItem(item.id)}>
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
            {tabIndex === 1 && (
              <Box display="flex" flexDirection="column" alignItems="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleRecipeRecommendation}
                  style={{ marginBottom: '16px' }}
                >
                  Get Recipe Recommendations
                </Button>
                {loading ? (
                  <CircularProgress />
                ) : (
                  <Box>
                    {recipeSuggestions.length > 0 ? (
                      recipeSuggestions.map((recipe, index) => (
                        <Paper key={index} style={{ padding: '16px', marginBottom: '8px' }}>
                          <Typography variant="h6">{recipe.title}</Typography>
                          <Typography variant="body1">{recipe.description}</Typography>
                        </Paper>
                      ))
                    ) : (
                      <Typography>No recipes found</Typography>
                    )}
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Paper>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Paper style={{ padding: '16px', margin: 'auto', maxWidth: '500px', marginTop: '100px' }}>
          <Typography variant="h6">{editMode ? 'Edit Item' : 'Add Item'}</Typography>
          <TextField
            label="Name"
            variant="outlined"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            variant="outlined"
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Quantity"
            variant="outlined"
            value={newItem.quantity}
            onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={editMode ? handleEditItem : handleAddItem}
            >
              {editMode ? 'Update Item' : 'Add Item'}
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Container>
  );
};

export default Dashboard;
