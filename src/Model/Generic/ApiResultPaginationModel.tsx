export interface ApiResultPaginationModel {
    currentPage: number
    totalPages: number
    itemsCount: number
    data: []
    isSuccess: boolean
    message: any
}
