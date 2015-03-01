# master

# 0.2.1

* Fix regression in using a `destDir` of `/` (without an array if `file` globs). [#14](https://github.com/joliss/broccoli-static-compiler/pull/14)

# 0.2.0

* Use `node-symlink-or-copy` to use symlinks instead of copying when possible (see
  [symlink-change.md](https://github.com/broccolijs/broccoli/blob/master/docs/symlink-change.md))

# 0.1.4

* Copy instead of hardlinking

# 0.1.3

* Use new broccoli-writer base class

# 0.1.2

* Use broccoli-kitchen-sink-helpers instead of larger broccoli dependency

# 0.1.1

* Update `broccoli` dependency

# 0.1.0

* Loosen dependencies

# 0.0.5

* Use `broccoli-transform` instead of `broccoli.Transformer`

# 0.0.4

* Do not require dependency-injecting broccoli

# 0.0.3

* Expose new functional syntax

# 0.0.2

* Use new promise API (no actual promises are harmed in this library)

# 0.0.1

* Initial release
