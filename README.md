Twoim zadaniem jest rozwinięcie obecnego w tym repozytorium projektu. Lista zadań do wykonania znajduje się poniżej.
Projekt jest wykonany we frameworku vue.js.
Wybierz 3 dowolne zadania i je zrealizuj.

### Uruchomienie projektu:
1. npm install
1. npm run web

### Zadania:
1. Dodaj komponent przycisku edycji każdego elementu listy i dodaj jako kolejną kolumnę do listy.
1. Dodaj edycję elementu listy z zapisem do API (edycja tylko danych, które są na liście). Edycja może być wykonywana od razu na wierszu listy lub na nowym widoku z formularzem.
1. Dostosuj widoki pod RWD.
1. Dodaj menu (możesz wymyślić dodatkowe elementy, które nigdzie nie prowadzą), które na telefonach zamienia się w hamburger menu.
1. Skonfiguruj środowisko do testów jednostkowych i napisz testy do widoku listy.

### Uwagi:
1. Pobierz kopię tego repozytorium (nie rób forka), dodaj na swoje konto i ustaw publiczny dostęp.
1. Każdy task wypushuj do mastera swojego repozytorium ze squashem i odpowiednim opisem w języku angielskim.
1. Testowe API: https://github.com/typicode/jsonplaceholder#how-to



##moje uwagi
#w zadaniu 1 stworzylem komponent EditButton

#w zadaniu 2 dodalem funkcjonalność, zdecydowalem się na implementacje edycji pracownika w wierszu zamiast na nowym widoku.
Powodem tego był fakt ze widok EmployeeList pobiera dane z momencie wczytania, wiec dane zapisane na innym widoku nie byłyby widoczne ponieważ jsonplaceholder nie ma faktycznej pamięci. Zaimplementowanie takiego rozwiązania wymagaloby przeniesienia 
stanu aplikacji poziom wyzej w drzewie komponentów przekazywanie go propsami w dół, a myślę ze celem zadania nie jest przebudowa całego projektu.
(Edit: nie rozumialem lifecycle. wystarczy wyrzucic watchera i moge zaimplementowac oba rozwiazania i )

#w zadaniu 4 stworzylem menu które układa się pionowo w wypadku wykrycia przeglądarki mobilnej, taka była treść zadania
# dodalem jest vue-jest babel-jest i 1 test