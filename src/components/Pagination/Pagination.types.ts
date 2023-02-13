export interface IPaginationProps {
  currentPage: number
  totalPages: number
  perPage: number
  length: number
  onPageChange: (page: number) => void
}
