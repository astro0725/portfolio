const SkillItem = ({ title, value }) => {
  return (
    <li className="relative">
      <div className="flex items-center gap-1 mb-2">
        <h5 className="text-sm font-medium leading-5 text-white">{title}</h5>
        <data value={value}>{value}%</data>
      </div>
      <div className="bg-body w-full h-2 rounded-lg">
        <div className="bg-primary h-full rounded-lg" style={{ width: `${value}%` }}></div>
      </div>
    </li>
  );
}

export default SkillItem;