const CheckComment = ({
  category = "grammar",
  check = 'Spelling "Participants"',
}: {
  category?: string;
  check?: string;
}) => {
  return (
    <div className="group flex items-center gap-6 px-8 py-6 border border-[#F69435]/50 rounded-2xl max-w-2xl cursor-pointer select-none transition-all hover:border-[#F69435]/30">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#F69435] uppercase">
          {category}
        </span>
        <h3
          className={`text-base font-medium transition-colors duration-300 text-[#E5E5E5]`}
        >
          {check}
        </h3>
      </div>
    </div>
  );
};

export default CheckComment;
