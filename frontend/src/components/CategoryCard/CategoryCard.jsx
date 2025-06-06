import React from "react";

const CategoryCard = ({ category }) => {
    return (
        <a href={`/search?q=${category.name}`}>
            <div className="flex flex-col transition duration-300 ease-in-out bg-black rounded-lg shadow-md hover:bg-[#1e1e1e]">
                <div className="flex items-center justify-center flex-1 p-4">
                    <img
                        className="max-w-full max-h-full rounded-lg"
                        src={category.image}
                        alt={category.name}
                    ></img>
                </div>
                <div className="mb-6 text-center">
                    <h3 className="m-0 text-xl font-semibold">{category.name}</h3>
                </div>
            </div>
        </a>
    );
};

export default CategoryCard;
