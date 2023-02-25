import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI_SUBMIT } from "../../const";
import { closeModal } from "../ModalDelivery/ModalDeliverySlice";
import { clearOrder } from "../order/orderSlice";

const initialState = {
  name: '',
  phone: '',
  format: 'delivery',
  address: '',
  floor: '',
  intercom: '',
};

export const submitForm = createAsyncThunk(
  'form/submit',
  async (data, {dispatch, rejectWithValue}) => {
    try {
      const response = await fetch(API_URI_SUBMIT, 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }

      dispatch(clearOrder());
      dispatch(closeModal());

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormValue: (state, action) => {
      state[action.payload.field] = action.payload.value;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(submitForm.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
        state.response = null;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.status = 'success';
        state.response = action.payload;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { updateFormValue } = formSlice.actions;

export default formSlice.reducer;