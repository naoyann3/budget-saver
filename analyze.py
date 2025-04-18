def analyze_expenses(expenses):
    suggestions = []
    comm = expenses.get('communication', 0)
    ins = expenses.get('insurance', 0)
    family = expenses.get('family', '')

    if comm > 20000:
        suggestions.append({
            'category': '通信費',
            'current': comm,
            'suggested': 19000,
            'provider': '楽天モバイル（3台＋インターネット）',
            'savings': comm - 19000
        })
    if ins > 10000 and family == '夫婦二人':
        suggestions.append({
            'category': '保険料',
            'current': ins,
            'suggested': 4000,
            'provider': '県民共済',
            'savings': ins - 4000
        })
    return suggestions

if __name__ == '__main__':
    test_data = {'communication': 30000, 'insurance': 30000, 'family': '夫婦二人'}
    print(analyze_expenses(test_data))