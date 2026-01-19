# Maneig d'Autoload
- Fixem-nos per exemple que `ClassBotiga.php` fa dos requires (a `Producte.php` i a `Carret.php`):
- Primer comentem les dues linies de require i automàticament després creem un nou fitxer que es dirà `autoload.php`
- Dins d'aquest fitxer crearem una funció que li direm autoload i que rebrà per paràmetre el nom de la classe. 

- Dins d'aquesta funció farem el `require` (que hem eliminat abans) però dins del nou require tindrem la classe que se li passa per paràmetre més l'extensió php:
    ```php
      require_once($class.".php");
    ```

- Ara procedim a executar la funció autoload, com?
    `spl_autoload_register('nom_funcio');`

- A continuació cridarem el fitxer `autoload.php` des del fitxer on vam eliminar els dos requires_once, és a dir, cridarem autoload des de `ClassBotiga.php`

- Podeu trobar interessant fer ús també de spl_autoload_register així:
```php
spl_autoload_register(function ($className) {
    // Convertim el nom de la classe en un camí de fitxer
    $file = __DIR__ . '/classes/' . $className . '.php';

    if (file_exists($file)) {
        require $file;
    }
});
```

- O també podeu cridar la funció `spl_autoload_register` amb diferents autoloads:
```php
spl_autoload_register('autoload_1');
spl_autoload_register('autoload_2');

function autoload_1($className) {
    $file = __DIR__ . '/models/' . $className . '.php';
    if (file_exists($file)) {
        require $file;
    }
}

function autoload_2($className) {
    $file = __DIR__ . '/controllers/' . $className . '.php';
    if (file_exists($file)) {
        require $file;
    }
}
```

- si `Producte.php`fos una classe en comptes d'un trait i tinguessim la classe `Textil.php`que hereta de `Producte.php` i també tinguessim un `require_once("Producte.php");` hauriem de comentar aquesta linia i posar el require de l'autoload:
```php

require_once("autoload.php");

class Textil extends Producte{

}
```