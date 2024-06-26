import axiosInstance from "./axiosInstance";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getTests = createAsyncThunk(
    'test/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get('/placement/all');
            return response.data;
        } catch (error) {
            let errorMessage;
            if (error.message === 'Network Error') {
                errorMessage = 'Network error!';
            }
            return rejectWithValue({message: errorMessage, status: error.response ? error.response.status : null});
        }
    }
);

export const getTestById = createAsyncThunk(
    `test/getById`,
    async (testId, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get(`/placement/${testId}`);
            return response.data
        } catch (error) {
            let errorMessage;
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        errorMessage = 'Invalid ID test!';
                        break;
                    case 404:
                        errorMessage = 'Test not found!';
                        break;
                    default:
                        errorMessage = 'Unknown error occurred!';
                }
            } else if (error.message === 'Network Error') {
                errorMessage = 'Network error!';
            }
            return rejectWithValue({
                message: errorMessage,
                status: error.response ? error.response.status : null,
            });
        }
    }
);