import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Все', icon: 'Grid3x3' },
    { id: 'business', name: 'Бизнес', icon: 'Building2' },
    { id: 'services', name: 'Услуги', icon: 'Wrench' },
    { id: 'entertainment', name: 'Развлечения', icon: 'PartyPopper' },
    { id: 'transport', name: 'Транспорт', icon: 'Car' },
    { id: 'events', name: 'События', icon: 'Calendar' },
    { id: 'directory', name: 'Справочник', icon: 'Book' },
    { id: 'contacts', name: 'Контакты', icon: 'Phone' }
  ]

  const organizations = [
    {
      id: 1,
      name: 'Центр развития бизнеса',
      category: 'business',
      description: 'Консультации по развитию малого и среднего бизнеса',
      rating: 4.8,
      reviews: 124,
      address: 'ул. Большая Покровская, 46',
      phone: '+7 (831) 234-56-78',
      image: '/img/370b58c4-dfd6-4d42-999d-056398e50dfa.jpg'
    },
    {
      id: 2,
      name: 'Мастерская красоты "Стиль"',
      category: 'services',
      description: 'Парикмахерские услуги и косметология',
      rating: 4.9,
      reviews: 89,
      address: 'пр. Ленина, 12',
      phone: '+7 (831) 345-67-89',
      image: '/img/370b58c4-dfd6-4d42-999d-056398e50dfa.jpg'
    },
    {
      id: 3,
      name: 'Кинотеатр "Премьер"',
      category: 'entertainment',
      description: 'Современный кинотеатр с IMAX залом',
      rating: 4.7,
      reviews: 234,
      address: 'ул. Горького, 78',
      phone: '+7 (831) 456-78-90',
      image: '/img/370b58c4-dfd6-4d42-999d-056398e50dfa.jpg'
    },
    {
      id: 4,
      name: 'Такси "Быстрый город"',
      category: 'transport',
      description: 'Быстрая и надежная служба такси',
      rating: 4.6,
      reviews: 456,
      address: 'круглосуточно',
      phone: '+7 (831) 567-89-01',
      image: '/img/370b58c4-dfd6-4d42-999d-056398e50dfa.jpg'
    },
    {
      id: 5,
      name: 'Фестиваль "Звуки Поволжья"',
      category: 'events',
      description: 'Музыкальный фестиваль на набережной Волги',
      rating: 4.9,
      reviews: 178,
      address: 'Нижне-Волжская набережная',
      phone: '+7 (831) 678-90-12',
      image: '/img/370b58c4-dfd6-4d42-999d-056398e50dfa.jpg'
    },
    {
      id: 6,
      name: 'Справочная служба города',
      category: 'directory',
      description: 'Информация о городских услугах и организациях',
      rating: 4.5,
      reviews: 89,
      address: 'ул. Минина, 5',
      phone: '+7 (831) 789-01-23',
      image: '/img/370b58c4-dfd6-4d42-999d-056398e50dfa.jpg'
    }
  ]

  const filteredOrganizations = organizations.filter(org => {
    const matchesSearch = org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         org.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || org.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />)
    }
    
    if (hasHalfStar) {
      stars.push(<Icon key="half" name="StarHalf" size={16} className="text-yellow-400 fill-current" />)
    }
    
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Icon key={`empty-${i}`} name="Star" size={16} className="text-gray-300" />)
    }
    
    return stars
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Icon name="MapPin" size={32} className="text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">НН Справочник</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                <Icon name="Map" size={16} className="mr-2" />
                Карта
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                <Icon name="Phone" size={16} className="mr-2" />
                Контакты
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Справочный портал Нижнего Новгорода
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Найдите нужные организации, услуги и развлечения в вашем городе
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Поиск организаций, услуг..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-lg shadow-sm"
                />
                <Button size="lg" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700">
                  Найти
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Категории</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`flex flex-col items-center p-4 h-auto space-y-2 ${
                  selectedCategory === category.id 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'hover:bg-green-50 hover:text-green-600'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <Icon name={category.icon} size={24} />
                <span className="text-sm font-medium">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Организации {selectedCategory !== 'all' && `в категории "${categories.find(c => c.id === selectedCategory)?.name}"`}
            </h3>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Filter" size={16} className="mr-2" />
                Фильтры
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="SlidersHorizontal" size={16} className="mr-2" />
                Сортировка
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOrganizations.map((org) => (
              <Card key={org.id} className="group hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-t-lg">
                  <img 
                    src={org.image} 
                    alt={org.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {categories.find(c => c.id === org.category)?.name}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                    {org.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {org.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      {renderStars(org.rating)}
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        {org.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {org.reviews} отзывов
                    </span>
                  </div>
                  
                  <Separator className="mb-3" />
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="MapPin" size={14} className="mr-2 text-gray-400" />
                      {org.address}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="Phone" size={14} className="mr-2 text-gray-400" />
                      {org.phone}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="outline" size="sm" className="flex-1 mr-2">
                      <Icon name="Eye" size={14} className="mr-2" />
                      Подробнее
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Map" size={14} className="mr-2" />
                      На карте
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="MapPin" size={24} className="text-green-400" />
                <span className="text-xl font-bold">НН Справочник</span>
              </div>
              <p className="text-gray-400">
                Ваш путеводитель по Нижнему Новгороду
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Бизнес</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Развлечения</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Транспорт</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Полезные ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О проекте</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Добавить организацию</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Реклама</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (831) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@nn-spravka.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Нижний Новгород
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex items-center justify-between">
            <p className="text-gray-400">
              © 2024 НН Справочник. Все права защищены.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Icon name="Facebook" size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Icon name="Twitter" size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Icon name="Instagram" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index