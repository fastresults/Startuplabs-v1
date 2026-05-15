import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const getActiveFilterCount = (filters: {
  selectedCategory: string | null;
  searchQuery: string;
  selectedTags: string[];
  timeCommitment: string | null;
  skillLevel: string | null;
  location: string | null;
}) => {
  const { selectedCategory, searchQuery, selectedTags, timeCommitment, skillLevel, location } = filters;
  let count = 0;
  if (selectedCategory) count++;
  if (searchQuery) count++;
  if (selectedTags.length > 0) count += selectedTags.length;
  if (timeCommitment) count++;
  if (skillLevel) count++;
  if (location) count++;
  return count;
};

export const getCategoryStyles = (category: string) => {
  switch(category) {
    case 'digital':
      return 'bg-purple-500/20 text-purple-400';
    case 'mainstreet':
      return 'bg-green-500/20 text-green-400';
    case 'platform':
      return 'bg-orange-500/20 text-orange-400';
    default:
      return 'bg-blue-500/20 text-blue-400';
  }
};

export const getCategoryName = (category: string) => {
  switch(category) {
    case 'digital':
      return 'Online Business';
    case 'mainstreet':
      return 'Local Business';
    case 'platform':
      return 'Platform';
    case 'sidehustle':
      return 'Side Hustle';
    default:
      return 'Business';
  }
};

// Throttle function to limit how often a function can be called
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let inThrottle = false;
  let lastResult: ReturnType<T> | undefined;
  
  return function(this: any, ...args: Parameters<T>): ReturnType<T> | undefined {
    if (!inThrottle) {
      lastResult = func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
    return lastResult;
  };
}

// Debounce function to delay execution until after a period of inactivity
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(this: any, ...args: Parameters<T>): void {
    const later = () => {
      timeout = null;
      func.apply(this, args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}