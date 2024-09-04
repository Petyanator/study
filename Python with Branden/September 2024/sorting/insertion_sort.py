from timing_sort_algo import run_sorting_algorithm
numbers_list = [10, 82, 6, 18, 37, 21, 58, 45, 93, 76, 12, 89, 67, 23, 91, 78, 56, 43, 30, 27, 15, 85, 62, 49, 36, 24, 13, 81, 68, 55, 42, 31, 20, 9, 87, 64, 51, 38, 26, 14, 83, 70, 57, 44, 32, 22, 11, 88, 65, 52, 39, 28, 17, 86, 73, 60, 47, 35, 25, 16, 90, 77, 63, 50, 37, 26, 15, 84, 71, 59, 46, 34, 23, 12, 91, 78, 66, 53, 41, 30, 29, 18, 87, 74, 61, 48, 36, 25, 14, 92, 79, 67, 54, 42, 31, 20, 9, 88, 75, 63, 51, 39, 28, 17, 86, 73, 60, 47, 35, 24, 13, 90, 77, 65, 52, 40, 29, 19, 8, 89, 76, 64, 53, 41, 30, 27, 16, 91, 78, 66, 54, 43, 32, 21, 10, 87, 75, 62, 50, 38, 27, 15, 92, 79, 67, 55, 44, 33, 22, 11, 88, 76, 63, 51, 39, 28, 17, 85, 73, 60, 48, 36, 25, 14, 93, 80, 68, 56, 45, 34, 23, 12, 91, 79, 67, 55, 44, 33, 22, 11, 89, 77, 65, 53, 42, 31, 20, 9, 88, 76, 64, 52, 41, 30, 29, 18, 87, 75, 63, 51, 40, 29, 19, 8, 90, 78, 66, 54, 43, 32, 21, 10, 89, 77, 65, 53, 42, 31, 20, 9, 88, 76, 64, 52, 41, 30, 29, 18, 87, 75, 63, 51, 40, 29, 19, 8, 90, 78, 66, 54, 43, 32, 21, 10, 89, 77, 65, 53, 42, 31, 20, 9, 88, 76, 64, 52, 41, 30, 29, 18, 87, 75, 63, 51, 40, 29, 19, 8, 90, 78, 66, 54, 43, 32, 21, 10, 89, 77, 65, 53, 42, 31, 20, 9, 88, 76, 64, 52, 41, 30, 29, 18, 87, 75, 63, 51, 40, 29, 19, 8, 90, 78, 66, 54, 43, 32, 21, 10, 89, 77, 65, 53, 42, 31, 20, 9, 88, 76, 64, 52, 41, 30, 29, 18, 87, 75, 63, 51, 40, 29, 19, 8, 90, 78, 66, 54, 43, 32, 21, 10, 89, 77, 65, 53, 42, 89, 77, 65, 53, 42] 


def insertion_sort(list):
    for i in range(1, len(list)):
        
        current_element = list[i]

        j = i - 1

        # comparison(previous) element = list[j]

        while j >= 0 and current_element < list[j]:
            list[j + 1] = list[j] 
            j -= 1
        
        list[j + 1] = current_element
    return list
    

def main():
    run_sorting_algorithm("insertion_sort", numbers_list)
    print(insertion_sort(numbers_list))

if __name__ == "__main__":
    main()