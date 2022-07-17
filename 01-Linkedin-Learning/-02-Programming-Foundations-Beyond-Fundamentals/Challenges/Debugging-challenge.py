# define function for plant if care low for aloe, if care medium for pothos, if care  high for orchid.
def plantRecommendation(care):
# I find syntax error '='
    if care == 'low':
        print('aloe')
    elif care == 'medium':
        print('pothos')      
# I find logical error 'medium'
    elif care == 'high':
        print('orchid')       
# I find runtime error 'plant_rec'
plantRecommendation('low')
plantRecommendation('medium')
plantRecommendation('high')
