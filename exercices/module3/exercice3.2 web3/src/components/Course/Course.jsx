import { Header } from 'components/Header/Header';
import { Part } from 'components/Part/Part';
import React from 'react';

export const Course = ( { course } ) => {
    const parts = course.parts;
    
    return (
        <div>
            <Header title={course.name} />
            {parts.map((p) =>
                <Part key={p.id} part={p} />
            )}
        </div>
    );
}