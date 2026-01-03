import React from 'react';
import './styles.css';

export const Table = ({ cabeceras = [], campos = [], data = [], striped = false, render = {} }) => {

    const hasData = Array.isArray(data) && data.length > 0;

    return (
        <div className="table fade-enter">
            <table className="table__content">
                <thead className="table__head">
                    <tr className="table__row table__row--head">
                        {cabeceras.map(cabecera => (
                            <th key={cabecera} className="table__cell table__cell--head" scope="col" >
                                {cabecera}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="table__body">
                    {!hasData ? (
                        <tr className="table__row">
                            <td className="table__cell table__cell--empty" colSpan={cabeceras.length} >
                                No hay datos
                            </td>
                        </tr>
                    ) : (
                        data.map((item, rowIndex) => (
                            <tr key={rowIndex} className={`table__row ${striped ? 'table__row--striped' : ''}`}>
                                {campos.map((campo, colIndex) => (
                                    <td key={colIndex} className="table__cell" data-label={cabeceras[colIndex]}>
                                        {
                                            campo === 'index'
                                                ? rowIndex + 1
                                                : render && render[campo]
                                                    ? render[campo](item[campo], item)
                                                    : item[campo] ?? ''
                                        }
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};
