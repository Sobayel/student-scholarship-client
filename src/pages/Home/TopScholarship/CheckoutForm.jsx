import { CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";


const CheckoutForm = ({ closeModal, appliedInfo, refetch }) => {
    const [processing, setProcessing] = useState(false)
    return (
        <>
      {' '}
      <form>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        <div className='flex mt-8 justify-around'>
          <button
            // disabled={!stripe || !clientSecret || processing}
            type='submit'
            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          >
            {processing ? (
              <ImSpinner9 className='animate-spin m-auto' size={24} />
            ) : (
              `Pay`
            )}
          </button>
          <button
            onClick={closeModal}
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
          >
            Cancel
          </button>
        </div>
      </form>
      {/* {cardError && <p className='text-red-600 ml-8'>{cardError}</p>} */}
    </>
    );
};

export default CheckoutForm;