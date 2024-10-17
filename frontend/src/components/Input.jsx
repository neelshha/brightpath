const Input = ({ icon: Icon, ...props }) => {
    return (
      <div className='relative mb-6'>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon className='size-5 text-orange-400' />
        </div>
        {/* Render a native HTML input element instead of the recursive Input component */}
        <input
          {...props}
          className="w-full pl-10 pr-3 py-2 bg-white bg-opacity-50 rounded-lg border border-orange-600 text-orange-400 placeholder-gray-700 transition duration-200"
        />
      </div>
    );
  };
  
  export default Input;