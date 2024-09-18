import React, { createContext, useState, ReactNode, useContext } from 'react';

interface FilterContextProps {
    filter: number;
    setFilter: React.Dispatch<React.SetStateAction<number>>;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [filter, setFilter] = useState<number>(0);

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = (): FilterContextProps => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
};
