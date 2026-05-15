import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  siblingCount = 1
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // If there's only 1 page, don't render pagination
  if (totalPages <= 1) return null;

  // Generate page numbers to display
  const generatePagination = () => {
    // Calculate range of visible page numbers
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    // Should we show dots on left side?
    const showLeftDots = leftSiblingIndex > 2;
    // Should we show dots on right side?
    const showRightDots = rightSiblingIndex < totalPages - 1;

    // Always show first and last page
    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // Generate array of page numbers to display
    let pages: (number | string)[] = [];

    // First page is always shown
    pages.push(firstPageIndex);

    // Add left dots if needed
    if (showLeftDots) {
      pages.push('...');
    }

    // Add page numbers between dots
    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      if (i !== firstPageIndex && i !== lastPageIndex) {
        pages.push(i);
      }
    }

    // Add right dots if needed
    if (showRightDots) {
      pages.push('...');
    }

    // Last page is always shown
    if (lastPageIndex !== firstPageIndex) {
      pages.push(lastPageIndex);
    }

    return pages;
  };

  const pages = generatePagination();

  return (
    <div className="flex items-center justify-center mt-8 space-x-2">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg border ${
          currentPage === 1
            ? 'border-gray-700 text-gray-600 cursor-not-allowed'
            : 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-blue-500/50'
        } transition-colors`}
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Page numbers */}
      {pages.map((page, index) => (
        <React.Fragment key={index}>
          {typeof page === 'number' ? (
            <button
              onClick={() => onPageChange(page)}
              className={`min-w-[40px] h-10 px-3 rounded-lg border ${
                currentPage === page
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-black/30 text-gray-300 border-gray-700 hover:bg-gray-800 hover:border-blue-500/50'
              } transition-colors`}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          ) : (
            <span className="px-2 text-gray-500">...</span>
          )}
        </React.Fragment>
      ))}

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg border ${
          currentPage === totalPages
            ? 'border-gray-700 text-gray-600 cursor-not-allowed'
            : 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-blue-500/50'
        } transition-colors`}
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;