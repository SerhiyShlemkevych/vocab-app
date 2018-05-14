const pageSize = 15;
const paginate = (allItems, page, pageSize) =>
    allItems.slice(page * pageSize - pageSize,
        page * pageSize);

export const getPage = ({browsePage: state}) => {
    const all = state.library.sorted[state.pagination.sortCriterion][state.pagination.sortDirection];
    return {
        ...state.pagination,
        items: paginate(
            all,
            state.pagination.currentPage,
            pageSize).map(id => state.library.byId[id]),
            maxPage: (all.length % pageSize === 0
                ? all.length / pageSize
                : Math.floor(all.length / pageSize) + 1),
    };
};

export const getReviseModeEnabled = (state) => state.browsePageMenu.reviseModeEnabled;
