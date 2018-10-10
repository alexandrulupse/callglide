import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Infinite from 'react-infinite';
import { createSelector } from 'reselect';
import { identity, orderBy } from 'lodash-es';
import {
  Table as TableContainer,
  TableHead,
  TableRow,
  TableHeadCell,
  TableHeadCellSortIcon,
  TableBody,
} from './styled';
import { ASC, DESC } from '../../core/constants';

const getOrderedRows = (rows, sortedBy, sortOrder) => orderBy(rows, [sortedBy], [sortOrder]);
const orderedRowsSelector = createSelector(getOrderedRows, identity);

const TableCells = ({ rows, rowComponent: RowComponent, rowProps, virtualized, virtualizedProps }) => {
  const TableCellsWrapper = virtualized ? Infinite : Fragment;

  return (
    <TableCellsWrapper {...virtualizedProps}>
      {rows.map((row, index) => <RowComponent key={index} index={index} orderNumber={index} {...rowProps} {...row} />)}
    </TableCellsWrapper>
  );
};

TableCells.propTypes = {
  rows: PropTypes.array.isRequired,
  rowComponent: PropTypes.func.isRequired,
  rowProps: PropTypes.object,
  virtualized: PropTypes.bool,
  virtualizedProps: PropTypes.object,
};

TableCells.defaultProps = {
  rows: undefined,
  rowComponent: undefined,
  rowProps: undefined,
  virtualized: undefined,
  virtualizedProps: undefined,
};

class Table extends PureComponent {
  constructor(props) {
    super(props);
    const { sortedBy, sortOrder } = props;
    this.state = { sortedBy, sortOrder };
  }

  componentWillReceiveProps(nextProps) {
    const { sortedBy, sortOrder } = nextProps;
    if (this.props.sortedBy !== sortedBy || this.props.sortOrder !== sortOrder) {
      this.setState({ sortedBy, sortOrder });
    }
  }

  onSortableTableHeadCellClick = name => {
    this.setState(prevState => {
      const sortedBy = name;
      const sortOrder = prevState.sortedBy !== name || prevState.sortOrder === DESC ? ASC : DESC;

      const { sort } = this.props;
      if (sort) sort(sortedBy, sortOrder);

      return { sortedBy, sortOrder };
    });
  };

  render() {
    const {
      cells,
      rows,
      rowComponent,
      rowProps,
      withClickableRows,
      withTopBorder,
      noBottomBorder,
      tableHeadProps,
      virtualized,
      virtualizedProps,
      sort,
    } = this.props;

    const orderedRows = sort ? rows : orderedRowsSelector(rows, this.state.sortedBy, this.state.sortOrder);

    return (
      <TableContainer withTopBorder={withTopBorder} noBottomBorder={noBottomBorder}>
        <TableHead {...tableHeadProps}>
          <TableRow>
            {cells.map(({ name, label, component: Component, componentProps, sortable, ...cellProps }) => (
              <TableHeadCell
                key={name}
                sortable={sortable}
                isSortedBy={this.state.sortedBy === name}
                sortOrder={this.state.sortOrder}
                onClick={sortable ? () => this.onSortableTableHeadCellClick(name) : undefined}
                {...cellProps}
              >
                {Component ? <Component {...componentProps} /> : label}
                <TableHeadCellSortIcon />
              </TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody withClickableRows={withClickableRows}>
          <TableCells
            rows={orderedRows}
            rowComponent={rowComponent}
            rowProps={rowProps}
            virtualized={virtualized}
            virtualizedProps={virtualizedProps}
          />
        </TableBody>
      </TableContainer>
    );
  }
}

Table.propTypes = {
  cells: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  rowComponent: PropTypes.func.isRequired,
  rowProps: PropTypes.object,
  sortedBy: PropTypes.string,
  sortOrder: PropTypes.string,
  withClickableRows: PropTypes.bool,
  withTopBorder: PropTypes.bool,
  noBottomBorder: PropTypes.bool,
  tableHeadProps: PropTypes.object,
  virtualized: PropTypes.bool,
  virtualizedProps: PropTypes.object,
  sort: PropTypes.func,
};

Table.defaultProps = {
  rowProps: undefined,
  sortedBy: undefined,
  sortOrder: undefined,
  withClickableRows: undefined,
  withTopBorder: undefined,
  noBottomBorder: undefined,
  tableHeadProps: undefined,
  virtualized: undefined,
  virtualizedProps: undefined,
  sort: undefined,
};

export default Table;
