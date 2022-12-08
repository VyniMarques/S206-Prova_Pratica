Feature: Testando API Pokemon - Prova Pratica.

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'


Scenario: Testando retorno.
        Given url url_base
        And path 'pokemon/pikachu'
        When method get
        Then status 200

Scenario: Testando retorno com informações inválidas.
        Given url url_base
        And path 'pokemon/karate'
        When method get
        Then status 404
    
Scenario: Testando retorno gengar e verificando o JSON.
        Given url url_base
        And path 'pokemon/gengar'
        When method get
        Then status 200
        And match response.name == "gengar"
        And match response.id == 94

Scenario: Testando retorno abilidade sturdy e verificando se esta na serie principal pelo JSON.
        Given url url_base
        And path '/ability/sturdy/'
        When method get
        Then status 200
        And def main_series = $.is_main_series 
        When method get
        Then status 200
        And match response.main_series == "true"

Scenario: Procurando Pokemon com nome certo e id errado
        Given url url_base
        And path 'pokemon/mew'
        And match response.id == 90
        Then status 404
