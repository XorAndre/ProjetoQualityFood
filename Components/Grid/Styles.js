import estilo from 'styled-components/native'
const Content = estilo.View`
	margin: 0 auto;
    width: 98%;
`;
const RowGrid = estilo.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    &:after {
	  content: "";
	  clear: both;
	  display: table;
	}
`;
const getColumn = (valueGrid) =>{
	if(!valueGrid) return;
	const width = valueGrid / 12 * 100;
	return `width: ${width}%;`;
}

const ColumnGrid = estilo.View`
	padding: .25rem;
    ${({ SizeColumn }) => SizeColumn && getColumn(SizeColumn)}
`;

export { Content, RowGrid, ColumnGrid };