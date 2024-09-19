const ErrorMessage = ({message = "Something went wrong"}) => {
  return (
    <p className='error-message' role='error-message'>{message}</p>
  )
}

export default ErrorMessage