
import React from "react";
import ExpenseCard from "../ExpenseCard";

interface Expense {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CategorySectionProps {
  heading: string;
  intro: string;
  icon: React.ReactNode;
  expenses: Expense[];
}

const CategorySection = ({ heading, intro, icon, expenses }: CategorySectionProps) => {
  return (
    <div className="mb-12 last:mb-0 text-center">
      <div className="flex justify-center">{icon}</div>
      <h2 className="text-[1.75rem] md:text-3xl font-bold text-[#212529] mb-3 font-poppins text-center">
        {heading}
      </h2>
      <div className="text-base text-[#212529] mb-6 font-poppins font-normal max-w-3xl mx-auto text-center">
        {intro}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
        {expenses.map((expense) => (
          <ExpenseCard
            key={expense.title}
            title={expense.title}
            description={expense.description}
            icon={expense.icon}
            headingLevel="h3"
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
