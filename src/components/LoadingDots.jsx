const LoadingDots = () => {
  return (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
    </div>
  );
};

export default LoadingDots;
