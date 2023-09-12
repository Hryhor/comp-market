import { createAsyncThunk, createSlice, PayloadAction  } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState, AppThunk } from '../store';

interface Product {
    //id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    imageProduct: string;
}

interface ProductsState {
    isLoading: boolean;
    isError: boolean;
    message: string | null;
    data: Product[] | null;
}

export const getProducts = createAsyncThunk('GET_PRODUCTS', async (_, thunkAPI) => {
    try {
        const products = await axios.get<Product[]>('api/products');
        return products.data;
    } catch (error:any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const initialState: ProductsState = {
    isLoading: false,
    isError: false,
    message: null,
    data: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.data = null;
        });
    }
});

export default productsSlice.reducer;
export const selectProducts = (state: RootState) => state.products.data;